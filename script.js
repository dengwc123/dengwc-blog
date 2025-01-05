// DOM 加载完成后执行
document.addEventListener('DOMContentLoaded', function() {
    // 导航栏滚动效果
    window.addEventListener('scroll', function() {
        const navbar = document.querySelector('.navbar');
        if (window.scrollY > 50) {
            navbar.style.background = 'var(--nav-bg)';
            navbar.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
        } else {
            navbar.style.background = 'transparent';
            navbar.style.boxShadow = 'none';
        }
    });

    // 导航链接点击事件
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);
            
            // 移除其他链接的active类
            document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));
            // 添加active类到当前链接
            this.classList.add('active');
            
            targetSection.scrollIntoView({ behavior: 'smooth' });
        });
    });

    // 轮播图配置
    const carouselInner = document.querySelector('.carousel-inner');
    // 清空现有的轮播项
    carouselInner.innerHTML = '';
    
    // 轮播图配置
    const images = [
        { 
            url: 'images/slide1.jpg',  // 第一张图片路径
            title: '欢迎来到我的个人网站', 
            desc: '这里是我的个人作品展示空间' 
        },
        { 
            url: 'images/slide2.jpg',  // 第二张图片路径
            title: '创新思维', 
            desc: '探索无限可能' 
        },
        { 
            url: 'images/slide3.jpg',  // 第三张图片路径
            title: '专业技能', 
            desc: '精益求精' 
        }
    ];

    // 添加轮播项
    images.forEach((image, index) => {
        const div = document.createElement('div');
        div.className = `carousel-item ${index === 0 ? 'active' : ''}`;
        div.innerHTML = `
            <img src="${image.url}" class="d-block w-100" alt="${image.title}">
            <div class="carousel-caption">
                <h2>${image.title}</h2>
                <p>${image.desc}</p>
            </div>
        `;
        carouselInner.appendChild(div);
    });

    // AI助手功能
    const chatModal = document.querySelector('.chat-modal');
    const aiAssistantBtn = document.querySelector('.ai-assistant-btn');
    const closeChatBtn = document.querySelector('.close-chat-btn');
    const chatInput = document.querySelector('.chat-input');
    const sendBtn = document.querySelector('.send-btn');
    const chatMessages = document.querySelector('.chat-messages');

    // 打开对话框
    aiAssistantBtn.addEventListener('click', function() {
        chatModal.classList.add('active');
        // 如果是第一次打开，显示欢迎消息
        if (chatMessages.children.length === 0) {
            addMessage('你好！我是AI助手，有什么我可以帮你的吗？', 'ai');
        }
    });

    // 关闭对话框
    closeChatBtn.addEventListener('click', function() {
        chatModal.classList.remove('active');
    });

    // 发送消息函数
    function sendMessage() {
        const message = chatInput.value.trim();
        if (!message) return;

        // 添加用户消息
        addMessage(message, 'user');
        chatInput.value = '';

        // 模拟AI回复
        setTimeout(() => {
            addMessage('这是一个模拟的AI回复消息。在实际应用中，这里应该连接到后端API。', 'ai');
        }, 1000);
    }

    // 添加消息到聊天界面
    function addMessage(text, type) {
        const messageDiv = document.createElement('div');
        messageDiv.className = `message ${type}-message fade-in`;
        messageDiv.innerHTML = `
            <div class="message-content">
                ${marked.parse(text)}
            </div>
        `;
        chatMessages.appendChild(messageDiv);
        chatMessages.scrollTop = chatMessages.scrollHeight;
    }

    // 发送按钮点击事件
    sendBtn.addEventListener('click', sendMessage);

    // 输入框回车发送
    chatInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            sendMessage();
        }
    });

    // 社交媒体图标悬停效果
    document.querySelectorAll('.social-link').forEach(link => {
        link.addEventListener('mouseover', function() {
            this.style.transform = 'rotate(360deg)';
        });
        link.addEventListener('mouseout', function() {
            this.style.transform = 'rotate(0deg)';
        });
    });

    // 微信二维码弹窗（示例）
    const wechatLink = document.querySelector('.social-link.wechat');
    wechatLink.addEventListener('click', function(e) {
        e.preventDefault();
        alert('这里应该显示微信二维码');
    });
}); 