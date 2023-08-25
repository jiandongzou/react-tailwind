function App() {
  
  return (
    <>
      <div className="container mx-auto bg-gray-200 hover:bg-green-50 rounded-xl shadow border p-8 m-10">
      <p className="text-gray-700 font-bold mb-5 text-[18px]">
        Welcome!
      </p>
      <p className="text-lg text-ellipsis overflow-hidden whitespace-nowrap text-custom">
        Hello React and tailwindcss
      </p>
      <p className="text-tahiti-100">
        我是自定义嵌套颜色
      </p>
    </div>
    </>
  )
}

export default App
