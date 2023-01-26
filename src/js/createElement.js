function div(className='') {
  const div = document.createElement('div');
  div.className = className;
  return div;
}

function a(href='') {
  const a = document.createElement('a');
  a.href = href;
  return a;
}

function img(src='', alt='', className='') {
  const img = document.createElement('img');
  img.src = src;
  img.alt = alt;
  img.className = className;
  return img;
}

function p(textContent) {
  const p = document.createElement('p');
  p.textContent = textContent;
  return p;
}
