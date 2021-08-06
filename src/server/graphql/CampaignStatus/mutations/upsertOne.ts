import { mutationField, nonNull } from 'nexus'

export const CampaignStatusUpsertOneMutation = mutationField(
  'upsertOneCampaignStatus',
  {
    type: nonNull('CampaignStatus'),
    args: {
      where: nonNull('CampaignStatusWhereUniqueInput'),
      create: nonNull('CampaignStatusCreateInput'),
      update: nonNull('CampaignStatusUpdateInput'),
    },
    resolve(_parent, args, { prisma, select }) {
      return prisma.campaignStatus.upsert({
        ...args,
        ...select,
      })
    },
  },
)
