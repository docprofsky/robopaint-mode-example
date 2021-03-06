/**
 * @file Holds all RoboPaint manual/auto painting mode specific code
 */

// Initialize the RoboPaint canvas Paper.js extensions & layer management.
rpRequire('paper_utils')(paper);
rpRequire('paper_hershey')(paper);

// Init defaults & settings
paper.settings.handleSize = 10;

// Animation frame callback
function onFrame(event) {
  canvas.onFrame(event);
}

function onMouseDrag(event) {
  // Use the mouse drag delta to change the X/Y position offset.
  $('#hcenter').val(Math.round($('#hcenter').val()) + event.delta.x).change();
  $('#vcenter').val(Math.round($('#vcenter').val()) + event.delta.y).change();
}

// Show preview paths
function onMouseMove(event)  {
  project.deselectAll();

  if (event.item) {
    event.item.selected = true;
  }
}

canvas.paperInit(paper);
