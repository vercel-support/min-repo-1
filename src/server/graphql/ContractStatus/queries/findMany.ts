import { queryField, nonNull, list } from 'nexus'

export const ContractStatusFindManyQuery = queryField(
  'findManyContractStatus',
  {
    type: nonNull(list(nonNull('ContractStatus'))),
    args: {
      where: 'ContractStatusWhereInput',
      orderBy: list('ContractStatusOrderByInput'),
      cursor: 'ContractStatusWhereUniqueInput',
      distinct: 'ContractStatusScalarFieldEnum',
      skip: 'Int',
      take: 'Int',
    },
    resolve(_parent, args, { prisma, select }) {
      return prisma.contractStatus.findMany({
        ...args,
        ...select,
      })
    },
  },
)
