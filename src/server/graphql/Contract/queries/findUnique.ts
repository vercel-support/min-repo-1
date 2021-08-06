import { queryField, nonNull } from 'nexus'

export const ContractFindUniqueQuery = queryField('findUniqueContract', {
  type: 'Contract',
  args: {
    where: nonNull('ContractWhereUniqueInput'),
  },
  resolve(_parent, { where }, { prisma, select }) {
    return prisma.contract.findUnique({
      where,
      ...select,
    })
  },
})
