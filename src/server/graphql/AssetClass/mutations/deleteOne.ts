import { mutationField, nonNull } from 'nexus'

export const AssetClassDeleteOneMutation = mutationField(
  'deleteOneAssetClass',
  {
    type: 'AssetClass',
    args: {
      where: nonNull('AssetClassWhereUniqueInput'),
    },
    resolve: async (_parent, { where }, { prisma, select }) => {
      return prisma.assetClass.delete({
        where,
        ...select,
      })
    },
  },
)
