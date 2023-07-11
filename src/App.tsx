import { Layout } from "antd";
import { Sidebar } from "./components/sidebar/sidebar";
import { Table } from "./components/table/table";

function App() {
	return (
		<Layout>
			<Sidebar />
			<Table />
		</Layout>
	);
}

export default App;
