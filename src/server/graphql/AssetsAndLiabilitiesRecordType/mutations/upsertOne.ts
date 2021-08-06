import { mutationField, nonNull } from 'nexus'

export const AssetsAndLiabilitiesRecordTypeUpsertOneMutation = mutationField(
  'upsertOneAssetsAndLiabilitiesRecordType',
  {
    type: nonNull('AssetsAndLiabilitiesRecordType'),
    args: {
      where: nonNull('AssetsAndLiabilitiesRecordTypeWhereUniqueInput'),
      create: nonNull('AssetsAndLiabilitiesRecordTypeCreateInput'),
      update: nonNull('AssetsAndLiabilitiesRecordTypeUpdateInput'),
    },
    resolve(_parent, args, { prisma, select }) {
      return prisma.assetsAndLiabilitiesRecordType.upsert({
        ...args,
        ...select,
      })
    },
  },
)
