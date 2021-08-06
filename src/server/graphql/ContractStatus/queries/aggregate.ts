import { queryField, list } from 'nexus'

export const ContractStatusAggregateQuery = queryField(
  'aggregateContractStatus',
  {
    type: 'AggregateContractStatus',
    args: {
      where: 'ContractStatusWhereInput',
      orderBy: list('ContractStatusOrderByInput'),
      cursor: 'ContractStatusWhereUniqueInput',
      distinct: 'ContractStatusScalarFieldEnum',
      skip: 'Int',
      take: 'Int',
    },
    resolve(_parent, args, { prisma, select }) {
      return prisma.contractStatus.aggregate({ ...args, ...select }) as any
    },
  },
)
