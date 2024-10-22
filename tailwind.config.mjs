/** @type {import('tailwindcss').Config} */

export default {
  content: ['./src/**/*.{mjs,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        'main': "url('/assets/background.jpg')",
      }
    }
  },
  plugins: [
    function ({ addComponents }) {
      addComponents({
        '.upload-self.ant-upload-wrapper.ant-upload-picture-card-wrapper .ant-upload.ant-upload-select':
          {
            width: '301px',
            height: '302px'
          },
        '.upload-self.ant-upload-wrapper.ant-upload-picture-card-wrapper .ant-upload-list.ant-upload-list-picture-card .ant-upload-list-item-container':
          {
            width: '301px',
            height: '302px'
          },
        '.inner': {
          height: '98vh',
          width: '98vw',
          overflow: 'auto',
          'backdrop-filter': 'blur(7px)',
          'background-color': 'rgba(0, 0, 0, .25)',
          'border-radius': '12px',
          'box-shadow': 'inset 4px 4px 6px 0 hsla(0, 0%, 100%, .3)',
        },
        '.product-card': {
          'background-color': 'rgba(0, 0, 0, .2)',
          'border-radius': '6px',
          'padding': '0.7rem',
          'border': '1px solid #666',
        },
        '.product-card:hover': {
          'box-shadow': '0px 0px 4px 4px hsla(0, 0%, 100%, .2)',
          'border-color': '#00e4c9',
        },
        '.video-modal-content .ant-modal-content': {
          'padding': '24px 0px 0px 0px',
        },
        '.video-modal-content .ant-modal-close': {
          'top': '0px',
          'right': '0px',
        },
        '.product-card:hover .module-icon': {
          'stroke': '#00DDCA'
        }
      })
    }
  ]
}
