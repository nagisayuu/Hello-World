$(function() {
  
  // 「/imglist」にアクセスして画像リストを取得
  $.get('/imglist', function(imglist) {
    
    // 画像リストを参照して、すべての画像を表示する
    imglist.forEach(function(img) {
      $('<div class="column is-one-quarter"><img src="https://cdn.glitch.com/49ca9b34-fba3-4df5-95e8-efa78fe7697b%2F'+ img +'"></div>')
      .appendTo('#imgbox');
    });
    
  });
  
});
