import { queryField, nonNull } from 'nexus'

export const BranchCodeFindUniqueQuery = queryField('findUniqueBranchCode', {
  type: 'BranchCode',
  args: {
    where: nonNull('BranchCodeWhereUniqueInput'),
  },
  resolve(_parent, { where }, { prisma, select }) {
    return prisma.branchCode.findUnique({
      where,
      ...select,
    })
  },
})
