import { mutationField, nonNull } from 'nexus'

export const AssetStatusDeleteOneMutation = mutationField(
  'deleteOneAssetStatus',
  {
    type: 'AssetStatus',
    args: {
      where: nonNull('AssetStatusWhereUniqueInput'),
    },
    resolve: async (_parent, { where }, { prisma, select }) => {
      return prisma.assetStatus.delete({
        where,
        ...select,
      })
    },
  },
)
