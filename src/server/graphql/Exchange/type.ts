import { objectType } from 'nexus'

export const Exchange = objectType({
  nonNullDefaults: {
    output: true,
    input: false,
  },
  name: 'Exchange',
  definition(t) {
    t.string('id')
    t.nullable.string('name')
    t.list.field('SecuritiesExchange', {
      type: 'Securities',
      args: {
        where: 'SecuritiesWhereInput',
        orderBy: 'SecuritiesOrderByInput',
        cursor: 'SecuritiesWhereUniqueInput',
        take: 'Int',
        skip: 'Int',
        distinct: 'SecuritiesScalarFieldEnum',
      },
      resolve(root: any) {
        return root.SecuritiesExchange
      },
    })
    t.nullable.field('_count', {
      type: 'ExchangeCountOutputType',
      resolve(root: any) {
        return root._count
      },
    })
  },
})
