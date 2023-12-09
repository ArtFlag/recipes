module.exports = {
  sweet: [
    {
      type: 'category',
      label: 'Biscuits',
      items: [{ type: 'autogenerated', dirName: 'sweet/biscuits' }],
    },
    {
      type: 'category',
      label: 'Gâteaux',
      items: [{ type: 'autogenerated', dirName: 'sweet/gateaux' }],
    },
    {
      type: 'category',
      label: 'Pâtes',
      items: [{ type: 'autogenerated', dirName: 'sweet/pates' }],
    },
    {
      type: 'category',
      label: 'Tartes',
      items: [{ type: 'autogenerated', dirName: 'sweet/tartes' }],
    },
    {
      type: 'category',
      label: 'Autres',
      items: [{ type: 'autogenerated', dirName: 'sweet/autres' }],
    },
  ],
  pastry: [
    {
      type: 'category',
      label: 'Bread',
      items: [
        { type: 'autogenerated', dirName: 'pastry/bread' },
        {
          type: 'link',
          label: 'Calculator',
          href: 'https://www.omnicalculator.com/food/bakers-percentage',
        },
      ],
    },
    {
      type: 'category',
      label: 'Enriched',
      items: [{ type: 'autogenerated', dirName: 'pastry/enriched' }],
    },
  ],
  savoury: [
    {
      type: 'autogenerated',
      dirName: 'savoury',
    },
  ],
  cocktail: [
    {
      type: 'autogenerated',
      dirName: 'cocktails',
    },
  ],
}
