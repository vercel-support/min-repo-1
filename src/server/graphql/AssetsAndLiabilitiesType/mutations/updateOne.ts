import { mutationField, nonNull } from 'nexus'

export const AssetsAndLiabilitiesTypeUpdateOneMutation = mutationField(
  'updateOneAssetsAndLiabilitiesType',
  {
    type: nonNull('AssetsAndLiabilitiesType'),
    args: {
      where: nonNull('AssetsAndLiabilitiesTypeWhereUniqueInput'),
      data: nonNull('AssetsAndLiabilitiesTypeUpdateInput'),
    },
    resolve(_parent, { data, where }, { prisma, select }) {
      return prisma.assetsAndLiabilitiesType.update({
        where,
        data,
        ...select,
      })
    },
  },
)
