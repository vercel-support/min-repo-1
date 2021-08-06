import { objectType } from 'nexus'

export const AssetsAndLiabilitiesRecordType = objectType({
  nonNullDefaults: {
    output: true,
    input: false,
  },
  name: 'AssetsAndLiabilitiesRecordType',
  definition(t) {
    t.string('id')
    t.nullable.string('name')
    t.nullable.string('description')
    t.list.field('AssetsAndLiabilitiesRecordType', {
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
        return root.AssetsAndLiabilitiesRecordType
      },
    })
    t.nullable.field('_count', {
      type: 'AssetsAndLiabilitiesRecordTypeCountOutputType',
      resolve(root: any) {
        return root._count
      },
    })
  },
})
