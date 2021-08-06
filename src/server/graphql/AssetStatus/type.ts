import { objectType } from 'nexus'

export const AssetStatus = objectType({
  nonNullDefaults: {
    output: true,
    input: false,
  },
  name: 'AssetStatus',
  definition(t) {
    t.string('id')
    t.nullable.string('name')
    t.list.field('AssetStatus', {
      type: 'Asset',
      args: {
        where: 'AssetWhereInput',
        orderBy: 'AssetOrderByInput',
        cursor: 'AssetWhereUniqueInput',
        take: 'Int',
        skip: 'Int',
        distinct: 'AssetScalarFieldEnum',
      },
      resolve(root: any) {
        return root.AssetStatus
      },
    })
    t.nullable.field('_count', {
      type: 'AssetStatusCountOutputType',
      resolve(root: any) {
        return root._count
      },
    })
  },
})
