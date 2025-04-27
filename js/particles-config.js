// 初始化粒子系统
document.addEventListener('DOMContentLoaded', function() {
  particlesJS('particles-js', {
    particles: {
      number: { value: 80, density: { enable: true } },
      color: { value: '#ff6b6b' },
      shape: { type: 'circle' },
      opacity: { value: 0.5 },
      size: { value: 3, random: true },
      move: {
        enable: true,
        speed: 6,
        direction: 'none',
        out_mode: 'out'
      }
    },
    interactivity: {
      events: {
        onClick: {
          enable: true,
          mode: 'push' // 点击时生成新粒子
        },
        onHover: {
          enable: true,
          mode: 'repulse' // 鼠标悬停产生斥力
        }
      }
    },
    retina_detect: true // 自动适配高清屏
  });
});