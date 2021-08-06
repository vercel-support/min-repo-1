import { queryField, nonNull, list } from 'nexus'

export const ContractFindCountQuery = queryField('findManyContractCount', {
  type: nonNull('Int'),
  args: {
    where: 'ContractWhereInput',
    orderBy: list('ContractOrderByInput'),
    cursor: 'ContractWhereUniqueInput',
    distinct: 'ContractScalarFieldEnum',
    skip: 'Int',
    take: 'Int',
  },
  resolve(_parent, args, { prisma }) {
    return prisma.contract.count(args as any)
  },
})
