const fs = require('fs');
const path = require('path');

const directoryPath = path.join(__dirname);

function updateFile(filePath) {
    let content = fs.readFileSync(filePath, 'utf8');
    let originalContent = content;

    // 1. Fix the arrow icon viewBox
    content = content.replace(/viewBox="0 0 64 64">\s*<use href="#svg-249122327_280"/g, 'viewBox="0 0 16 16">\n                            <use href="#svg-249122327_280"');
    
    // Also try without newline just in case
    content = content.replace(/viewBox="0 0 64 64"><use href="#svg-249122327_280"/g, 'viewBox="0 0 16 16"><use href="#svg-249122327_280"');

    // 2. Increase Hero Text size (preset 1e8ex7u) from 20px to 32px
    // and line-height from 28px to 40px
    content = content.replace(/\.framer-styles-preset-1e8ex7u\.rich-text-wrapper p \{[\s\S]*?--framer-font-size:\s*20px;[\s\S]*?\}/g, function(match) {
        return match.replace(/--framer-font-size:\s*20px;/, '--framer-font-size: 28px;')
                    .replace(/--framer-line-height:\s*28px;/, '--framer-line-height: 36px;');
    });
    // Just replace globally if it's explicitly written in CSS
    content = content.replace(/--framer-font-size:\s*20px;(\s*--framer-font-style:\s*normal;\s*--framer-font-style-bold:\s*normal;\s*--framer-font-variation-axes:\s*normal;\s*--framer-font-weight:\s*400;\s*--framer-font-weight-bold:\s*700;\s*--framer-letter-spacing:\s*0em;\s*--framer-line-height:)\s*28px;/g, '--framer-font-size: 28px;$1 36px;');

    // 3. Increase Button text size (preset 13b29z) from 18px to 22px
    content = content.replace(/--framer-font-size:\s*18px;(\s*--framer-font-style:\s*normal;\s*--framer-font-style-bold:\s*normal;\s*--framer-font-style-bold-italic:\s*italic;\s*--framer-font-style-italic:\s*italic;\s*--framer-font-variation-axes:\s*normal;\s*--framer-font-weight:\s*400;\s*--framer-font-weight-bold:\s*700;\s*--framer-font-weight-bold-italic:\s*700;\s*--framer-font-weight-italic:\s*400;\s*--framer-letter-spacing:\s*0px;\s*--framer-line-height:)\s*28px;/g, '--framer-font-size: 20px;$1 30px;');

    // 4. Increase global base sizes if needed
    
    if (content !== originalContent) {
        fs.writeFileSync(filePath, content, 'utf8');
        console.log(`Updated ${filePath}`);
    }
}

function traverseDirectory(dir) {
    const files = fs.readdirSync(dir);
    files.forEach(file => {
        const fullPath = path.join(dir, file);
        const stat = fs.statSync(fullPath);
        if (stat.isDirectory()) {
            if (file !== 'node_modules' && file !== '.git') {
                traverseDirectory(fullPath);
            }
        } else if (file.endsWith('.html')) {
            updateFile(fullPath);
        }
    });
}

traverseDirectory(directoryPath);
