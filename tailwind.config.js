module.exports = {
    content: [
        "./dist/**/*.html",
        "./node_modules/flowbite/**/*.js"

    ],
    theme: {
        extend: {
            height: {
                '500': '42rem',
                '450': '28rem',
              }
              
        },

    },
    plugins: [
        require('flowbite/plugin')
    ]
};

