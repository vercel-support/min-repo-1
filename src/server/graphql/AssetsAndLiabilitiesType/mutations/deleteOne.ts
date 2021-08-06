import { mutationField, nonNull } from 'nexus'

export const AssetsAndLiabilitiesTypeDeleteOneMutation = mutationField(
  'deleteOneAssetsAndLiabilitiesType',
  {
    type: 'AssetsAndLiabilitiesType',
    args: {
      where: nonNull('AssetsAndLiabilitiesTypeWhereUniqueInput'),
    },
    resolve: async (_parent, { where }, { prisma, select }) => {
      return prisma.assetsAndLiabilitiesType.delete({
        where,
        ...select,
      })
    },
  },
)
