const bankDepositRegionTypeSelect = document.getElementById("bank-deposit-region-type");
const bankDepositRegionTypeSelectMap = new Map([
	["census-regions", "vega/bank_deposits_states_1935-2022/bank_deposits_census_regions.vg.json"],
	["states", "vega/bank_deposits_states_1935-2022/bank_deposits_states.vg.json"],
]);
bankDepositRegionTypeSelect.addEventListener(
	"input",
	async _ => {
		await vegaEmbed("#chart2", bankDepositRegionTypeSelectMap.get(bankDepositRegionTypeSelect.value), vegaEmbedOpts);
	}
);

const bankAccessSelect = document.getElementById("bank-access");
const bankAccessVegaMap = new Map([
	["unbanked", "vega/bank_access_states_2021/unbanked_rates_states.vg.json"],
	["underbanked", "vega/bank_access_states_2021/underbanked_rates_states.vg.json"],
	["fully-banked", "vega/bank_access_states_2021/fully_banked_rates_states.vg.json"]
]);
bankAccessSelect.addEventListener(
	"input",
	async _ => {
		await vegaEmbed("#chart4", bankAccessVegaMap.get(bankAccessSelect.value), vegaEmbedOpts);
	}
);

const vegaEmbedOpts = {
	renderer: "svg",
	actions: false,
};

try {
	const chart1 = await vegaEmbed("#chart1", "vega/bank_branches_per_capita.vg_1925-2022.json", vegaEmbedOpts);
	const chart2 = await vegaEmbed("#chart2", bankDepositRegionTypeSelectMap.get(bankDepositRegionTypeSelect.value), vegaEmbedOpts);
	const chart3 = await vegaEmbed("#chart3", "vega/unbanked_underbanked_rates_national.vg.json", vegaEmbedOpts);
	const chart4 = await vegaEmbed("#chart4", bankAccessVegaMap.get(bankAccessSelect.value), vegaEmbedOpts);
	const chart5 = await vegaEmbed("#chart5", "vega/primary_account_access_method_national_2013-2021.vg.json", vegaEmbedOpts);
} catch (e) {
	console.error(e);
}
