$(document).ready(function(){SnakeGame=function(){function k(){f="right",l(),m(),i=0,"undefined"!=typeof game_loop&&clearInterval(game_loop),n()}function l(){var a=5;j=[];for(var b=a-1;b>=0;b--)j.push({x:b,y:0})}function m(){h={x:Math.round(Math.random()*(c-e)/e),y:Math.round(Math.random()*(d-e)/e)}}function n(){b.fillStyle="white",b.fillRect(0,0,c,d),b.strokeStyle="black",b.strokeRect(0,0,c,d);var a=j[0].x,l=j[0].y;if("right"==f?a++:"left"==f?a--:"up"==f?l--:"down"==f&&l++,g=f,-1==a||a==c/e||-1==l||l==d/e||p(a,l,j))return void k();if(a==h.x&&l==h.y){var n={x:a,y:l};i++,m()}else{var n=j.pop();n.x=a,n.y=l}j.unshift(n);for(var q=0;q<j.length;q++){var r=j[q];o(r.x,r.y)}o(h.x,h.y);var s="Score: "+i;b.fillText(s,5,d-5)}function o(a,c){b.fillStyle="blue",b.fillRect(a*e,c*e,e,e),b.strokeStyle="white",b.strokeRect(a*e,c*e,e,e)}function p(a,b,c){for(var d=0;d<c.length;d++)if(c[d].x==a&&c[d].y==b)return!0;return!1}var f,g,h,i,j,a=$("#canvas")[0],b=a.getContext("2d"),c=$("#canvas").width(),d=$("#canvas").height(),e=10;k(),$(document).keydown(function(a){var b=a.which;"37"==b&&"right"!=g?f="left":"38"==b&&"down"!=g?f="up":"39"==b&&"left"!=g?f="right":"40"==b&&"up"!=g&&(f="down")})}});