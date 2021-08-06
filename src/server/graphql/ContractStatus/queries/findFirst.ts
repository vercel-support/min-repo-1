import { queryField, list } from 'nexus'

export const ContractStatusFindFirstQuery = queryField(
  'findFirstContractStatus',
  {
    type: 'ContractStatus',
    args: {
      where: 'ContractStatusWhereInput',
      orderBy: list('ContractStatusOrderByInput'),
      cursor: 'ContractStatusWhereUniqueInput',
      distinct: 'ContractStatusScalarFieldEnum',
      skip: 'Int',
      take: 'Int',
    },
    resolve(_parent, args, { prisma, select }) {
      return prisma.contractStatus.findFirst({
        ...args,
        ...select,
      })
    },
  },
)
