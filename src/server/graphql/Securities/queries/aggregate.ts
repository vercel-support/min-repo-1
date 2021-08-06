import { queryField, list } from 'nexus'

export const SecuritiesAggregateQuery = queryField('aggregateSecurities', {
  type: 'AggregateSecurities',
  args: {
    where: 'SecuritiesWhereInput',
    orderBy: list('SecuritiesOrderByInput'),
    cursor: 'SecuritiesWhereUniqueInput',
    distinct: 'SecuritiesScalarFieldEnum',
    skip: 'Int',
    take: 'Int',
  },
  resolve(_parent, args, { prisma, select }) {
    return prisma.securities.aggregate({ ...args, ...select }) as any
  },
})
