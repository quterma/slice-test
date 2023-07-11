const fs = require("fs");

const createTable = numRows => {
	const statuses = ["Pending Signatures", "Approved By Corp.", "Offered"];

	return new Array(numRows)
		.fill({
			geo: "Denmark",
			certificates: "GR-1",
			source: "Manual",
			plan: "Acne Israel",
			date: "01/01/22",
			prefix: "OC",
		})
		.map((row, id) => ({ ...row, id, status: statuses[Math.floor(Math.random() * statuses.length)] }));
};

fs.writeFile("src/api/table.json", JSON.stringify(createTable(200)), "utf8", err => {
	if (err) throw err;
	console.log("complete");
});
