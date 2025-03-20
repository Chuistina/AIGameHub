# 项目设计文档

## 目录结构
src/
components/
features/
store/
slices/
hooks.ts
store.ts
types/
utils/

## 技术要点

- **React + Redux + TypeScript**: 使用 React 进行前端开发，Redux 进行状态管理，TypeScript 提供类型安全。
- **功能组件与 Hooks**: 优先使用功能组件和 React Hooks。
- **Redux 最佳实践**:
  - 使用 Redux Toolkit 进行高效的 Redux 开发。
  - 实现切片模式以组织 Redux 代码。
  - 使用 `createAsyncThunk` 处理异步操作。
  - 在组件中使用选择器访问状态。
- **额外指令**:
  1. 使用 `React.FC` 定义带有 props 的功能组件。
  2. 实施严格的 TypeScript 检查。
  3. 在组件中使用 Redux Hooks（`useSelector`, `useDispatch`）。
  4. 创建可重用的类型化 Hooks 进行 Redux 操作。
  5. 在异步操作中实现适当的错误处理。
  6. 使用 Redux DevTools 进行调试。
  7. 遵循 Redux 风格指南进行命名约定。