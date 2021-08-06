import { mutationField, nonNull } from 'nexus'

export const AssetsAndLiabilitiesDeleteOneMutation = mutationField(
  'deleteOneAssetsAndLiabilities',
  {
    type: 'AssetsAndLiabilities',
    args: {
      where: nonNull('AssetsAndLiabilitiesWhereUniqueInput'),
    },
    resolve: async (_parent, { where }, { prisma, select }) => {
      return prisma.assetsAndLiabilities.delete({
        where,
        ...select,
      })
    },
  },
)
