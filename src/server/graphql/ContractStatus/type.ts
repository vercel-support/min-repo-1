import { objectType } from 'nexus'

export const ContractStatus = objectType({
  nonNullDefaults: {
    output: true,
    input: false,
  },
  name: 'ContractStatus',
  definition(t) {
    t.string('id')
    t.nullable.string('name')
    t.list.field('status', {
      type: 'Contract',
      args: {
        where: 'ContractWhereInput',
        orderBy: 'ContractOrderByInput',
        cursor: 'ContractWhereUniqueInput',
        take: 'Int',
        skip: 'Int',
        distinct: 'ContractScalarFieldEnum',
      },
      resolve(root: any) {
        return root.status
      },
    })
    t.nullable.field('_count', {
      type: 'ContractStatusCountOutputType',
      resolve(root: any) {
        return root._count
      },
    })
  },
})
