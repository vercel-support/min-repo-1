import { objectType } from 'nexus'

export const AssetsAndLiabilitiesType = objectType({
  nonNullDefaults: {
    output: true,
    input: false,
  },
  name: 'AssetsAndLiabilitiesType',
  definition(t) {
    t.string('id')
    t.nullable.string('name')
    t.nullable.string('description')
    t.list.field('AssetsAndLiabilitiesType', {
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
        return root.AssetsAndLiabilitiesType
      },
    })
    t.nullable.field('_count', {
      type: 'AssetsAndLiabilitiesTypeCountOutputType',
      resolve(root: any) {
        return root._count
      },
    })
  },
})
