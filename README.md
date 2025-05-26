# 🌳 Fortran AST/ASR JSON Visualizer

[![React](https://img.shields.io/badge/React-18.2.0-61DAFB?logo=react)](https://reactjs.org/)
[![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-3.2.4-38B2AC?logo=tailwind-css)](https://tailwindcss.com/)
[![WebAssembly](https://img.shields.io/badge/WebAssembly-Ready-654FF0?logo=webassembly)](https://webassembly.org/)
[![GitHub Pages](https://img.shields.io/badge/GitHub_Pages-Deployed-222222?logo=github)](https://ubaidsk.github.io/fortran_ast_asr_json_visualizer/)

An interactive web-based visualization tool for exploring and understanding Fortran Abstract Syntax Trees (AST) and Abstract Semantic Representation (ASR). This project brings modern web technologies to Fortran development, making it easier to understand and debug Fortran code structure.

This uses [LFortran](https://lfortran.org/) for generating the AST and ASR Json from fortran code.

## ✨ Features

- 🎨 **Interactive Visualization**: Dynamic, zoomable tree visualization of AST/ASR structures
- 🔄 **Real-time Updates**: Instantly see changes as you modify JSON input
- 🌐 **WebAssembly Integration**: Powered by LFortran's WASM compilation
- 🎯 **User-friendly Interface**: Clean, modern UI with dark mode support
- 📱 **Responsive Design**: Works seamlessly on desktop and mobile devices

## 🚀 Live Demo

Try it now: [https://ubaidsk.github.io/fortran_ast_asr_json_visualizer/](https://ubaidsk.github.io/fortran_ast_asr_json_visualizer/)

## 🛠️ Setup & Installation

### Prerequisites

This setups up `node` on your local system. Follow this if you don't have `node` already installed.

1. **Install NVM (Node Version Manager)**
   ```bash
   # For macOS and Linux
   curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.0/install.sh | bash
   
   # Add to your ~/.zshrc
   export NVM_DIR="$HOME/.nvm"
   [ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"
   ```

2. **Install Node.js**
   ```bash
   nvm install 16
   nvm use 16
   ```

3. **Verify Installation**
   ```bash
   node --version
   npm --version
   ```

### Project Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/ubaidsk/fortran_ast_asr_json_visualizer.git
   cd fortran_ast_asr_json_visualizer
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm start
   ```

4. **Build for production**
   ```bash
   npm run build
   npm run deploy
   ```

## 🔧 Technical Stack

### Core Technologies
- **React 18**: Modern UI development with hooks and functional components
- **WebAssembly**: LFortran compilation for AST/ASR processing
- **TailwindCSS**: Utility-first CSS framework
- **DaisyUI**: Tailwind CSS component library

### Visualization
- **React Flow**: Interactive node-based visualization
- **Dagre**: Graph layout and positioning algorithm
- **Remix Icons**: Modern icon library

### Development Tools
- **PostCSS**: CSS processing and optimization
- **Create React App**: React application bootstrapping
- **GitHub Pages**: Deployment and hosting

## 🤝 Contributing

We welcome all contributions, big or small!

## 🆕 Bug/Feature Request

For reporting bugs or suggestions, please [open an issue](https://github.com/ubaidsk/fortran_ast_asr_json_visualizer/issues) in the GitHub repository.

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---
Made with ❤️ for the Fortran Community
