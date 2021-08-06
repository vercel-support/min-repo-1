import { mutationField, nonNull } from 'nexus'

export const CampaignTypeUpsertOneMutation = mutationField(
  'upsertOneCampaignType',
  {
    type: nonNull('CampaignType'),
    args: {
      where: nonNull('CampaignTypeWhereUniqueInput'),
      create: nonNull('CampaignTypeCreateInput'),
      update: nonNull('CampaignTypeUpdateInput'),
    },
    resolve(_parent, args, { prisma, select }) {
      return prisma.campaignType.upsert({
        ...args,
        ...select,
      })
    },
  },
)
