const box1 = document.getElementById('box1');
const box2 = document.getElementById('box2');
const box3 = document.getElementById('box3');
const para1 = document.getElementById('content1');
const para2 = document.getElementById('content2');
const para3 = document.getElementById('content3');


function toggleParagraph(box,content,otherBoxes, otherContents) {
  //  handling current box
  if (box.classList.contains('active')) {
    
    box.classList.remove('active');
    content.style.display = "none";
  } else {
    
    box.classList.add('active');
    content.style.display = "block";
  }

  // Hiding  other boxes content  
  otherBoxes.forEach(otherBox => {
    if (otherBox !== box) {
      otherBox.classList.remove('active');
    }
  });

  otherContents.forEach(otherContent => {
    if (otherContent !== content) {
      otherContent.style.display = "none";
    }
  });

}

// event listeners for three boxes
box1.addEventListener('click', function() {
//    alert("clicked box1")
   console.log("clicked")
   
  toggleParagraph(box1,content1,[box2, box3] ,[content2, content3]);
});

box2.addEventListener('click', function() {
   
  toggleParagraph(box2,content2,[box1, box3], [content1, content3]);
});

box3.addEventListener('click', function() {
    
  toggleParagraph(box3,content3,[box1, box2],  [content1, content2]);
});

const selects = document.querySelectorAll('select');
selects.forEach(select => {
  select.addEventListener('click', function (event) {
    event.stopPropagation();
  });
});