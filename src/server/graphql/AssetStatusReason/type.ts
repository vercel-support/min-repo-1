import { objectType } from 'nexus'

export const AssetStatusReason = objectType({
  nonNullDefaults: {
    output: true,
    input: false,
  },
  name: 'AssetStatusReason',
  definition(t) {
    t.string('id')
    t.nullable.string('name')
    t.list.field('AssetStatusReason', {
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
        return root.AssetStatusReason
      },
    })
    t.nullable.field('_count', {
      type: 'AssetStatusReasonCountOutputType',
      resolve(root: any) {
        return root._count
      },
    })
  },
})
