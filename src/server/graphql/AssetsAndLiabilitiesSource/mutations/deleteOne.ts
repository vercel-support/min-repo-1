import { mutationField, nonNull } from 'nexus'

export const AssetsAndLiabilitiesSourceDeleteOneMutation = mutationField(
  'deleteOneAssetsAndLiabilitiesSource',
  {
    type: 'AssetsAndLiabilitiesSource',
    args: {
      where: nonNull('AssetsAndLiabilitiesSourceWhereUniqueInput'),
    },
    resolve: async (_parent, { where }, { prisma, select }) => {
      return prisma.assetsAndLiabilitiesSource.delete({
        where,
        ...select,
      })
    },
  },
)
