import { queryField, list } from 'nexus'

export const ContractFindFirstQuery = queryField('findFirstContract', {
  type: 'Contract',
  args: {
    where: 'ContractWhereInput',
    orderBy: list('ContractOrderByInput'),
    cursor: 'ContractWhereUniqueInput',
    distinct: 'ContractScalarFieldEnum',
    skip: 'Int',
    take: 'Int',
  },
  resolve(_parent, args, { prisma, select }) {
    return prisma.contract.findFirst({
      ...args,
      ...select,
    })
  },
})
