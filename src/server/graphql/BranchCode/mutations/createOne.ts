import { mutationField, nonNull } from 'nexus'

export const BranchCodeCreateOneMutation = mutationField(
  'createOneBranchCode',
  {
    type: nonNull('BranchCode'),
    args: {
      data: nonNull('BranchCodeCreateInput'),
    },
    resolve(_parent, { data }, { prisma, select }) {
      return prisma.branchCode.create({
        data,
        ...select,
      })
    },
  },
)
