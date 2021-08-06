import { mutationField, nonNull } from 'nexus'

export const AssetStatusReasonDeleteOneMutation = mutationField(
  'deleteOneAssetStatusReason',
  {
    type: 'AssetStatusReason',
    args: {
      where: nonNull('AssetStatusReasonWhereUniqueInput'),
    },
    resolve: async (_parent, { where }, { prisma, select }) => {
      return prisma.assetStatusReason.delete({
        where,
        ...select,
      })
    },
  },
)
