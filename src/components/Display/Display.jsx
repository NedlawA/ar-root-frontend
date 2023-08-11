import { useEffect, useRef, useMemo } from 'react';
import * as d3 from 'd3';
import PropTypes from 'prop-types'

const Display = ({formDisplay, resultDisplay}) => {
console.log(formDisplay[0].engLetters)  
    const svgRef = useRef(null);
    const data = useMemo(()=> ({
        name: `${resultDisplay.letters}: ${resultDisplay.engLetters}`,
        children: [
          {
            name: [`${resultDisplay.verbNoun}`],
            children: formDisplay.map((form)=> (
              {'name':[form.engDef, ` ${form.engLetters}`, ` ${form.formVer}`]}
            )),
          },
        ]
    } ), [resultDisplay.letters, resultDisplay.engLetters, resultDisplay.verbNoun, formDisplay]) 
  useEffect(() => {
      console.log('foo')
      const width = 1000;
      const marginTop = 20;
      const marginRight = 200;
      const marginBottom = 35;
      const marginLeft = 200;
      
      const root = d3.hierarchy(data);
      const dx = 60;
      const dy = (width - marginRight - marginLeft) / (1 + root.height);
      
      const tree = d3.tree().nodeSize([dx, dy]);
      const diagonal = d3.linkHorizontal().x(d => d.y).y(d => d.x);
      
      const svg = d3.select(svgRef.current)
      .attr('width', width)
      .attr('height', dx)
      .attr('viewBox', [-marginLeft, -marginTop, width, dx])
      .attr('style', 'width: 80vw; height: auto; font: 18px sans-serif; user-select: none;');
      svg.selectAll("*").remove();
      
      if (!resultDisplay.letters || !resultDisplay.engLetters ){
          return;
      }
    const gLink = svg.append('g')
      .attr('fill', 'none')
      .attr('stroke', '#555')
      .attr('stroke-opacity', 0.4)
      .attr('stroke-width', 1.5);

    const gNode = svg.append('g')
      .attr('cursor', 'pointer')
      .attr('pointer-events', 'all');

      function update(event, source) {
        const duration = event?.altKey ? 2500 : 350; // hold the alt key to slow down the transition
        const nodes = root.descendants().reverse();
        const links = root.links();
    
        // Compute the new tree layout.
        tree(root);
    
        let left = root;
        let right = root;
        root.eachBefore(node => {
          if (node.x < left.x) left = node;
          if (node.x > right.x) right = node;
        });
    
        const height = right.x - left.x + marginTop + marginBottom;
    
        const transition = svg.transition()
            .duration(duration)
            .attr("height", height)
            .attr("viewBox", [-marginLeft, left.x - marginTop, width, height])
            .tween("resize", window.ResizeObserver ? null : () => () => svg.dispatch("toggle"));
    
        // Update the nodes…
        const node = gNode.selectAll("g")
          .data(nodes, d => d.id);
    
        // Enter any new nodes at the parent's previous position.
        const nodeEnter = node.enter().append("g")
            .attr("transform", () => `translate(${source.y0},${source.x0})`)
            .attr("fill-opacity", 0)
            .attr("stroke-opacity", 0)
            .on("click", (event, d) => {
              d.children = d.children ? null : d._children;
              update(event, d);
            });
    
        nodeEnter.append("circle")
            .attr("r", 4.0)
            .attr("fill", d => d._children ? "#555" : "#999")
            .attr("stroke-width", 10);
    
        nodeEnter.append("text")
            .attr("dy", "0.71em")
            .attr("x", d => d._children ? -6 : 6)
            .attr("text-anchor", d => d._children ? "end" : "start")
            .attr("fill", "white")
            .text(d => d.data.name)
          .clone(true).lower()
            .attr("stroke-linejoin", "round")
            .attr("stroke-width", 1.5)
            .attr("stroke", "#555");
    
        // Transition nodes to their new position.
        const nodeUpdate = node.merge(nodeEnter).transition(transition)
            .attr("transform", d => `translate(${d.y},${d.x})`)
            .attr("fill-opacity", 1)
            .attr("stroke-opacity", 1);
    
        // Transition exiting nodes to the parent's new position.
        const nodeExit = node.exit().transition(transition).remove()
            .attr("transform", () => `translate(${source.y},${source.x})`)
            .attr("fill-opacity", 0)
            .attr("stroke-opacity", 0);
    
        // Update the links…
        const link = gLink.selectAll("path")
          .data(links, d => d.target.id);
    
        // Enter any new links at the parent's previous position.
        const linkEnter = link.enter().append("path")
            .attr("d", () => {
              const o = {x: source.x0, y: source.y0};
              return diagonal({source: o, target: o});
            });
    
        // Transition links to their new position.
        link.merge(linkEnter).transition(transition)
            .attr("d", diagonal);
    
        // Transition exiting nodes to the parent's new position.
        link.exit().transition(transition).remove()
            .attr("d", () => {
              const o = {x: source.x, y: source.y};
              return diagonal({source: o, target: o});
            });
    
        // Stash the old positions for transition.
        root.eachBefore(d => {
          d.x0 = d.x;
          d.y0 = d.y;
        });
      }

    // Set up the initial configuration of the tree
    root.x0 = dy / 2;
    root.y0 = 0;
    root.descendants().forEach((d, i) => {
      d.id = i;
      d._children = d.children;
      if (d.depth && d.data.name.length !== 7) d.children = null;
    });

    update(null, root);

  }, [data, resultDisplay.letters, resultDisplay.engLetters, resultDisplay.verbNoun, resultDisplay.id ]);

  return <svg id="tree" ref={svgRef} />;
};

Display.propTypes = {
    resultDisplay: PropTypes.array,
    handleGetForms: PropTypes.func,
    formDisplay: PropTypes.array
  };
export default Display