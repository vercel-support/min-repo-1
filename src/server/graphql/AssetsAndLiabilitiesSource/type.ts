import { objectType } from 'nexus'

export const AssetsAndLiabilitiesSource = objectType({
  nonNullDefaults: {
    output: true,
    input: false,
  },
  name: 'AssetsAndLiabilitiesSource',
  definition(t) {
    t.string('id')
    t.nullable.string('name')
    t.nullable.string('description')
    t.list.field('AssetsAndLiabilitiesSource', {
      type: 'AssetsAndLiabilities',
      args: {
        where: 'AssetsAndLiabilitiesWhereInput',
        orderBy: 'AssetsAndLiabilitiesOrderByInput',
        cursor: 'AssetsAndLiabilitiesWhereUniqueInput',
        take: 'Int',
        skip: 'Int',
        distinct: 'AssetsAndLiabilitiesScalarFieldEnum',
      },
      resolve(root: any) {
        return root.AssetsAndLiabilitiesSource
      },
    })
    t.nullable.field('_count', {
      type: 'AssetsAndLiabilitiesSourceCountOutputType',
      resolve(root: any) {
        return root._count
      },
    })
  },
})
