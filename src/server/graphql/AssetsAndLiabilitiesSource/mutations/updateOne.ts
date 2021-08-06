import { mutationField, nonNull } from 'nexus'

export const AssetsAndLiabilitiesSourceUpdateOneMutation = mutationField(
  'updateOneAssetsAndLiabilitiesSource',
  {
    type: nonNull('AssetsAndLiabilitiesSource'),
    args: {
      where: nonNull('AssetsAndLiabilitiesSourceWhereUniqueInput'),
      data: nonNull('AssetsAndLiabilitiesSourceUpdateInput'),
    },
    resolve(_parent, { data, where }, { prisma, select }) {
      return prisma.assetsAndLiabilitiesSource.update({
        where,
        data,
        ...select,
      })
    },
  },
)
