import { queryField, list } from 'nexus'

export const ContractAggregateQuery = queryField('aggregateContract', {
  type: 'AggregateContract',
  args: {
    where: 'ContractWhereInput',
    orderBy: list('ContractOrderByInput'),
    cursor: 'ContractWhereUniqueInput',
    distinct: 'ContractScalarFieldEnum',
    skip: 'Int',
    take: 'Int',
  },
  resolve(_parent, args, { prisma, select }) {
    return prisma.contract.aggregate({ ...args, ...select }) as any
  },
})
