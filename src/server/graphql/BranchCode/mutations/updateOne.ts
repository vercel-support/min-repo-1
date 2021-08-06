import { mutationField, nonNull } from 'nexus'

export const BranchCodeUpdateOneMutation = mutationField(
  'updateOneBranchCode',
  {
    type: nonNull('BranchCode'),
    args: {
      where: nonNull('BranchCodeWhereUniqueInput'),
      data: nonNull('BranchCodeUpdateInput'),
    },
    resolve(_parent, { data, where }, { prisma, select }) {
      return prisma.branchCode.update({
        where,
        data,
        ...select,
      })
    },
  },
)
