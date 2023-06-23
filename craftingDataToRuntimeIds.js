const craftingData = require('./crafting_data.json')

const { recipes } = craftingData

let runtimeIds = []

module.exports = {
  generate() {
    for (const recipe of recipes) {
      try {
        if (recipe.recipe.output.block_runtime_id) {
          runtimeIds.push(recipe.recipe.output.block_runtime_id)
        }
      } catch { }
    }

    return runtimeIds;
  }
}
