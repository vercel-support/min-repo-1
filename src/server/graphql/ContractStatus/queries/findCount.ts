import { queryField, nonNull, list } from 'nexus'

export const ContractStatusFindCountQuery = queryField(
  'findManyContractStatusCount',
  {
    type: nonNull('Int'),
    args: {
      where: 'ContractStatusWhereInput',
      orderBy: list('ContractStatusOrderByInput'),
      cursor: 'ContractStatusWhereUniqueInput',
      distinct: 'ContractStatusScalarFieldEnum',
      skip: 'Int',
      take: 'Int',
    },
    resolve(_parent, args, { prisma }) {
      return prisma.contractStatus.count(args as any)
    },
  },
)
