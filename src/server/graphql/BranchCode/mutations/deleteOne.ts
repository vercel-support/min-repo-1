import { mutationField, nonNull } from 'nexus'

export const BranchCodeDeleteOneMutation = mutationField(
  'deleteOneBranchCode',
  {
    type: 'BranchCode',
    args: {
      where: nonNull('BranchCodeWhereUniqueInput'),
    },
    resolve: async (_parent, { where }, { prisma, select }) => {
      return prisma.branchCode.delete({
        where,
        ...select,
      })
    },
  },
)
