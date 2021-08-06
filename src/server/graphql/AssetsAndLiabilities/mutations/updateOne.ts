import { mutationField, nonNull } from 'nexus'

export const AssetsAndLiabilitiesUpdateOneMutation = mutationField(
  'updateOneAssetsAndLiabilities',
  {
    type: nonNull('AssetsAndLiabilities'),
    args: {
      where: nonNull('AssetsAndLiabilitiesWhereUniqueInput'),
      data: nonNull('AssetsAndLiabilitiesUpdateInput'),
    },
    resolve(_parent, { data, where }, { prisma, select }) {
      return prisma.assetsAndLiabilities.update({
        where,
        data,
        ...select,
      })
    },
  },
)
