import suggestionsService from "../services/SuggestionsService.js";

export default async function SuggestionController(req, res) {
  try {
    const data = req.query.city;

    const suggestions = await suggestionsService(data);

    if (!suggestions) {
      return res.status(500).json({ error: "Error on getting suggestions" });
    }

    const names = suggestions.map((item) => ({
        name: item.name,
        country: item.country,
        state: item.state
    }))

    res.status(200).json(names);
  } catch (error) {
    console.error("Erron on SuggestionController: ", error.message);
    res.status(500).json({error:  "Error on server"});
  }
}
