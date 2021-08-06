import { queryField, nonNull, list } from 'nexus'

export const ContractFindManyQuery = queryField('findManyContract', {
  type: nonNull(list(nonNull('Contract'))),
  args: {
    where: 'ContractWhereInput',
    orderBy: list('ContractOrderByInput'),
    cursor: 'ContractWhereUniqueInput',
    distinct: 'ContractScalarFieldEnum',
    skip: 'Int',
    take: 'Int',
  },
  resolve(_parent, args, { prisma, select }) {
    return prisma.contract.findMany({
      ...args,
      ...select,
    })
  },
})
